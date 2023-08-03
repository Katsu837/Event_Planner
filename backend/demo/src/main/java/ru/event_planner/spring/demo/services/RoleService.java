package ru.event_planner.spring.demo.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.event_planner.spring.demo.entities.Role;
import ru.event_planner.spring.demo.repositories.RoleRepository;

@Service
@RequiredArgsConstructor
public class RoleService {
    private final RoleRepository roleRepository;

    public Role getUserRole() {
        return roleRepository.findByName("ROLE_USER").get();
    }
}
