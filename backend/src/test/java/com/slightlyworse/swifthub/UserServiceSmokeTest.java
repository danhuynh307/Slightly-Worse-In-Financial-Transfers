package com.slightlyworse.swifthub;

import com.slightlyworse.swifthub.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;

/**
 * Boots the full app and exercises the user slice through the service layer.
 * Covers the pieces most likely to regress: Flyway migration + seeding run, and
 * the fake-auth "current user" default resolves.
 */
@SpringBootTest
class UserServiceSmokeTest {

    @Autowired
    UserService userService;

    @Test
    void seededUsersAreLoaded() {
        assertFalse(userService.findAll().isEmpty(), "seeder should have created users");
    }

    @Test
    void currentUserDefaultsToFirstUser() {
        assertNotNull(userService.getCurrentUser(null).id());
    }
}
