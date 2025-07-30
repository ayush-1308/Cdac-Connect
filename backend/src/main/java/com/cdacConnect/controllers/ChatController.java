package com.cdacConnect.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import com.cdacConnect.entities.ChatMessage;
import com.cdacConnect.repositories.ChatMessageRepository;
import com.cdacConnect.service.UserService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import java.time.LocalDateTime;

@Controller
public class ChatController {

    @Autowired
    private UserService userService;

    @Autowired
    private ChatMessageRepository chatMessageRepository;

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @MessageMapping("/chat.addUser")
    @SendTo("/topic/public")
    @Tag(name = "Chat APIs", description = "Endpoints for User Management")
    @Operation(summary = "Add User to Chat")
    public ChatMessage addUser(@Payload ChatMessage chatMessage, SimpMessageHeaderAccessor headerAccessor) {

        if(userService.userExists(chatMessage.getSender())){

            //store username in session
            headerAccessor.getSessionAttributes().put("username", chatMessage.getSender());
            userService.setUserOnlineStatus(chatMessage.getSender(), true);

            System.out.println("User added Successfully "+ chatMessage.getSender()+ " with session ID "
                    +headerAccessor.getSessionId());

            chatMessage.setTimestamp(LocalDateTime.now());
            if(chatMessage.getContent()==null){
                chatMessage.setContent("");
            }
            return chatMessageRepository.save(chatMessage);
        }
        return null;
    }

    @MessageMapping("/chat.sendMessage")
    @SendTo("/topic/public")
    @Operation(summary = "Send Message")
    public ChatMessage sendMessage(@Payload ChatMessage chatMessage) {

        if(userService.userExists(chatMessage.getSender())){
            if(chatMessage.getTimestamp()==null){
                chatMessage.setTimestamp(LocalDateTime.now());
            }

            if(chatMessage.getContent()==null){
                chatMessage.setContent("");
            }

            return chatMessageRepository.save(chatMessage);
        }
        return null;
    }

    @MessageMapping("/chat.sendPrivateMessage")
    @Operation(summary = "Send Private Message")
    public void sendPrivateMessage(@Payload ChatMessage chatMessage, SimpMessageHeaderAccessor headerAccessor) {

        if(userService.userExists(chatMessage.getSender()) && userService.userExists(chatMessage.getRecipient())){

            if(chatMessage.getTimestamp()==null){
                chatMessage.setTimestamp(LocalDateTime.now());
            }

            if(chatMessage.getContent()==null){
                chatMessage.setContent("");
            }

            chatMessage.setType(ChatMessage.MessageType.PRIVATE_MESSAGE);

            ChatMessage savedMessage = chatMessageRepository.save(chatMessage);
            System.out.println("Message saved successfully with Id "+savedMessage.getId());


            try {
                String recepientDestination = "/user/" + chatMessage.getRecipient() + "/queue/private";
                System.out.println("Sending message to recepient destination " + recepientDestination);
                messagingTemplate.convertAndSend(recepientDestination, savedMessage);

                String senderDestination = "/user/" + chatMessage.getSender() + "/queue/private";
                System.out.println("Sending message to sender destination " + senderDestination);
                messagingTemplate.convertAndSend(senderDestination, savedMessage);
            }
            catch (Exception e) {
                System.out.println("ERROR occured while sending the message " + e.getMessage());
                e.printStackTrace();
            }
        }
        else{
            System.out.println("ERROR: Sender "+chatMessage.getSender()+" or recepient "+chatMessage.getRecipient()+" does not exist");
        }
    }
}