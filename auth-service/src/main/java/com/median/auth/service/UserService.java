package com.median.auth.service;

import com.median.auth.model.User;
import com.median.auth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User findUserByEmail(String email) {
        return userRepository.findUserByEmail(email);
    }



    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    public User saveUser(User user) {
        // Additional logic before saving the user, if needed
        return userRepository.save(user);
    }

    public void deleteUser(User user) {
        userRepository.delete(user);
    }
}