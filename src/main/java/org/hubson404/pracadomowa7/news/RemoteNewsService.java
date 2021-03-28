package org.hubson404.pracadomowa7.news;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RemoteNewsService {
    private final RestTemplate restTemplate;

    private final ObjectMapper objectMapper;
    private final JdbcTemplate jdbcTemplate;

    public void updateDatabase() {
        NewsResponseModel[] tenLatestNewsFromRemoteService = fetchTenLatestNewsFromRemoteService();
        List<NewsDto> tenLatestNewsDtosFromRemote = mapToListNewsDto(tenLatestNewsFromRemoteService);
        List<NewsDto> filteredNews = filterWithExistingNewsFromDb(tenLatestNewsDtosFromRemote);
        saveNewsToDatabase(filteredNews);
    }

    private NewsResponseModel[] fetchTenLatestNewsFromRemoteService() {

        URI uri = UriComponentsBuilder.fromHttpUrl("https://test.spaceflightnewsapi.net/api/v2/articles").build().toUri();
        ResponseEntity<String> responseEntity;

        try {
            responseEntity = restTemplate.getForEntity(uri, String.class);
        } catch (RestClientException exception) {
            throw new ExternalApiConnectionFailureException("Unable to get data from remote service.");
        }

        String responseBody = responseEntity.getBody();
        NewsResponseModel[] newsResponseModel;

        try {
            newsResponseModel = objectMapper.readValue(responseBody, NewsResponseModel[].class);
        } catch (JsonProcessingException e) {
            throw new DataProcessingException("Unable to process data from remote service.");
        }

        return newsResponseModel;
    }

    private List<NewsDto> mapToListNewsDto(NewsResponseModel[] newsResponseModels) {

        List<NewsDto> dtos = new ArrayList<>();

        for (NewsResponseModel element : newsResponseModels) {
            NewsDto dto = NewsDto.builder()
                    .id(element.getId())
                    .title(element.getTitle())
                    .url(element.getUrl())
                    .imageUrl(element.getImageUrl())
                    .newsSite(element.getNewsSite())
                    .summary(element.getSummary())
                    .publishedAt(element.getPublishedAt())
                    .updatedAt(element.getUpdatedAt())
                    .build();
            dtos.add(dto);
        }

        return dtos;
    }

    private List<NewsDto> filterWithExistingNewsFromDb(List<NewsDto> dtos) {

        List<String> tenLatestNewsIds = findNews();
        List<NewsDto> filteredNews = dtos.stream()
                .filter(entry -> !tenLatestNewsIds.contains(entry.getId()))
                .collect(Collectors.toList());
        return filteredNews;
    }

    private List<String> findNews() {

        List<String> allNewsIds = new ArrayList<>();
        String sql = "SELECT * FROM NEWS ORDER BY PUBLISHED_AT DESC";
        List<Map<String, Object>> query = jdbcTemplate.queryForList(sql);
        query.forEach(entry -> allNewsIds.add(String.valueOf(entry.get("id"))));

        return allNewsIds;
    }

    private void saveNewsToDatabase(List<NewsDto> filteredNews) {
        filteredNews.forEach(this::saveSingleNewsToDatabase);
    }

    private void saveSingleNewsToDatabase(NewsDto newsDto) {

        String sql = "INSERT INTO NEWS (ID, TITLE, URL, IMAGE_URL, NEWS_SITE, SUMMARY ,PUBLISHED_AT, UPDATED_AT) VALUES (?,?,?,?,?,?,?,?)";

        jdbcTemplate.update(sql, newsDto.getId(), newsDto.getTitle(), newsDto.getUrl(), newsDto.getImageUrl(),
                newsDto.getNewsSite(), newsDto.getSummary(), newsDto.getPublishedAt(), newsDto.getUpdatedAt());
    }


}

