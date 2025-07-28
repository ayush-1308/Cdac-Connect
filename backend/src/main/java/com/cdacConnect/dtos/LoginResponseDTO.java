package com.cdacConnect.dtos;

import lombok.Builder;
import lombok.Data;

@Data
public class LoginResponseDTO {

	private String token;
    private UserDTO userDTO;

    public LoginResponseDTO() {}
    public LoginResponseDTO(String token, UserDTO userDTO) {
        this.token = token;
        this.userDTO = userDTO;
    }
    
    // Getters and Setters
    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public UserDTO getUserDTO() {
        return userDTO;
    }

    public void setUserDTO(UserDTO userDTO) {
        this.userDTO = userDTO;
    }

    // Static Builder Method
    public static Builder builder() {
        return new Builder();
    }

    // Static Inner Builder Class
    public static class Builder {
        private String token;
        private UserDTO userDTO;

        public Builder token(String token) {
            this.token = token;
            return this;
        }

        public Builder userDTO(UserDTO userDTO) {
            this.userDTO = userDTO;
            return this;
        }

        public LoginResponseDTO build() {
            LoginResponseDTO dto = new LoginResponseDTO();
            dto.setToken(this.token);
            dto.setUserDTO(this.userDTO);
            return dto;
        }
    }
	
}
