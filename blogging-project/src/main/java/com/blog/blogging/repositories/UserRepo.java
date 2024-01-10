package com.blog.blogging.repositories;

import com.blog.blogging.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Integer> {
}
