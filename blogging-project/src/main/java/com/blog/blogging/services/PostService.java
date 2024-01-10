package com.blog.blogging.services;

import com.blog.blogging.entities.Post;
import com.blog.blogging.payloads.PostDto;
import com.blog.blogging.payloads.PostResponse;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface PostService {

    PostDto createPost(PostDto postDto, Integer userId, Integer categoryId);

    PostDto updatePost(PostDto postDto, Integer postId);

    void deletePost(Integer postId);

    PostResponse getAllPost(Integer pageNumber, Integer pageSize, String sortBy, String sortDir);

    PostDto getPostById(Integer postId);

    List<PostDto> getPostsByCategory(Integer categoryId);

    List<PostDto> getPostsByUser(Integer userId);

    List<PostDto> searchPosts(String keyword);
}
