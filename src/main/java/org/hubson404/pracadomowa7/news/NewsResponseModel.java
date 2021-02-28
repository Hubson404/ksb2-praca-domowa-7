package org.hubson404.pracadomowa7.news;

import lombok.Data;

@Data
public class NewsResponseModel {

    private String id;
    private String title;
    private String url;
    private String imageUrl;
    private String newsSite;
    private String summary;
    private String publishedAt;
    private String updatedAt;

}

