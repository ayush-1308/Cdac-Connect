package com.cdacConnect.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdacConnect.dtos.UserDto;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/api/users")
@Tag(name = "User APIs", description = "Endpoints for User Management")
public class DemoTestController {

    @Operation(summary = "Register a new user")
    @PostMapping("/signup")
    public ResponseEntity<UserDto> register(@RequestBody UserDto user) {
        // Simulate logic: set an ID and default role
        user.setId(1L);
        user.setRole("USER");

        // Hide password before sending back response
        user.setPassword(null);

        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }
}
