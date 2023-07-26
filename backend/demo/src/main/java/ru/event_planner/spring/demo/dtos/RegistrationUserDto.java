package ru.event_planner.spring.demo.dtos;

import lombok.Data;

import java.util.Date;

@Data
public class RegistrationUserDto {
    private String username;
    private String password;
    private String email;
    private Date birthday;
}
