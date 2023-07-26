package ru.event_planner.spring.demo.dtos;


import lombok.Data;

@Data
public class JwtRequest {
    private String username;
    private String password;
}
