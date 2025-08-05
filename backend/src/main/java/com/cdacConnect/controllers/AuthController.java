package com.cdacConnect.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import com.cdacConnect.dtos.LoginRequestDTO;
import com.cdacConnect.dtos.LoginResponseDTO;
import com.cdacConnect.dtos.RegisterRequestDTO;
import com.cdacConnect.dtos.UserDTO;
import com.cdacConnect.entities.User;
import com.cdacConnect.repositories.UserRepository;
import com.cdacConnect.service.AuthenticationService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import java.util.Map;

@RestController
@RequestMapping("/auth")
@Tag(name = "Authentication APIs", description = "Endpoints for User Management")
public class AuthController {

    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private UserRepository userRepository;

    @Operation(summary = "Register a new user")
    @PostMapping("/signup")
    public ResponseEntity<UserDTO> signup(@RequestBody RegisterRequestDTO registerRequestDTO){
        return ResponseEntity.ok(authenticationService.signup(registerRequestDTO));
    }

    @Operation(summary = "Login Route for user")
    @PostMapping("/login")
    public ResponseEntity<UserDTO> login(@RequestBody LoginRequestDTO loginRequestDTO){

        LoginResponseDTO loginResponseDTO = authenticationService.login(loginRequestDTO);
        ResponseCookie responseCookie = ResponseCookie.from("JWT", loginResponseDTO.getToken())
                .httpOnly(true)
                .secure(true)
                .path("/")
                .maxAge(1*60*60) //1 Hour
                .sameSite("strict")
                .build();

        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, responseCookie.toString())
                .body(loginResponseDTO.getUserDTO());

    }
    
    @Operation(summary = "Logout Route")
    @PostMapping("/logout")
    public ResponseEntity<String> logout(){
        return authenticationService.logout();
    }

    @Operation(summary = "Check For Online Users")
    @GetMapping("/getonlineusers")
    public ResponseEntity<Map<String, Object>> getOnlineUsers(){
        return ResponseEntity.ok(authenticationService.getOnlineUsers());
    }

    @Operation(summary = "To Get the current user")
    @GetMapping("/getcurrentuser")
    public ResponseEntity<?> getCurrentUser(Authentication authentication){

        if(authentication == null){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("USER NOT AUTHORIZED");
        }

        String username = authentication.getName();
        User user = userRepository.findByUsername(username).orElseThrow(() -> new RuntimeException("User not found"));

        return ResponseEntity.ok(convertToUserDTO(user));
    }

    public UserDTO convertToUserDTO(User user){
        UserDTO userDTO = new UserDTO();
        userDTO.setEmail(user.getEmail());
        userDTO.setUsername(user.getUsername());
        return userDTO;
    }
}