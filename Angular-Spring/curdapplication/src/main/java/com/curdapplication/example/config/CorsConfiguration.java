//package com.curdapplication.example.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
///*import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.web.SecurityFilterChain;*/
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//@Configuration
//public class CorsConfiguration {
//
//    private static final String ALLOWED_ORIGIN = "http://localhost:4200";
//    private static final String GET = "GET";
//    private static final String POST = "POST";
//    private static final String PUT = "PUT";
//    private static final String DELETE = "DELETE";
//
//    @Bean
//    public WebMvcConfigurer corsConfigurer() {
//        return  new WebMvcConfigurer() {
//            @Override
//            public void addCorsMappings(CorsRegistry registry) {
//                registry.addMapping("/**")
//                        .allowedMethods(GET, POST, PUT, DELETE)
//                        .allowedOrigins(ALLOWED_ORIGIN)
//                        .allowedHeaders("*")
//                        .allowedOriginPatterns("*")
//                        .allowCredentials(true);
//            }
//        };
//    }
//
//}
