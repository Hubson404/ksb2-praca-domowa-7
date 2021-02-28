package org.hubson404.pracadomowa7.news;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class NewsDto {
    private String newsId;
    private String id;
    private String title;
    private String url;
    private String imageUrl;
    private String newsSite;
    private String summary;
    private String publishedAt;
    private String updatedAt;
}
