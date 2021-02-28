package org.hubson404.pracadomowa7.news;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class NewsDao {

    private final JdbcTemplate jdbcTemplate;

    public List<NewsDto> findAll() {
        String sql = "SELECT * FROM NEWS";
        List<Map<String, Object>> query = jdbcTemplate.queryForList(sql);
        return toNewsDtos(query);
    }

    public void save(NewsDto newsDto) {

        String sql = "INSERT INTO NEWS (ID, TITLE, URL, IMAGE_URL, NEWS_SITE, SUMMARY ,PUBLISHED_AT, UPDATED_AT) VALUES (?,?,?,?,?,?,?,?)";
        jdbcTemplate.update(sql, newsDto.getId(), newsDto.getTitle(), newsDto.getUrl(), newsDto.getImageUrl(),
                newsDto.getNewsSite(), newsDto.getSummary(), newsDto.getPublishedAt(), newsDto.getUpdatedAt());
    }


    public void update(NewsDto newsDto, int id) {
        String sql = "UPDATE NEWS SET NEWS.TITLE=?, NEWS.URL=?, NEWS.IMAGE_URL=?, NEWS.NEWS_SITE=?, NEWS.SUMMARY=?, NEWS.UPDATED_AT=? WHERE NEWS_ID=?";
        jdbcTemplate.update(sql, newsDto.getTitle(), newsDto.getUrl(), newsDto.getImageUrl(),
                newsDto.getNewsSite(), newsDto.getSummary(), Instant.now().toString(), id);
    }

    public void delete(int id) {
        String sql = "DELETE FROM NEWS WHERE NEWS_ID=?";
        jdbcTemplate.update(sql, id);
    }

    private List<NewsDto> toNewsDtos(List<Map<String, Object>> query) {
        List<NewsDto> news = new ArrayList<>();

        query.forEach(entry -> news.add(NewsDto.builder()
                .newsId(String.valueOf(entry.get("news_id")))
                .id(String.valueOf(entry.get("id")))
                .title(String.valueOf(entry.get("title")))
                .url((String.valueOf(entry.get("url"))))
                .imageUrl((String.valueOf(entry.get("image_url"))))
                .newsSite((String.valueOf(entry.get("news_site"))))
                .summary((String.valueOf(entry.get("summary"))))
                .publishedAt((String.valueOf(entry.get("published_at"))))
                .updatedAt((String.valueOf(entry.get("updated_At"))))
                .build())
        );
        return news;
    }

    public NewsDto findById(int id) {
        String sql = "SELECT * FROM NEWS WHERE NEWS_ID=?";
        List<Map<String, Object>> query = jdbcTemplate.queryForList(sql, id);
        List<NewsDto> dtos = toNewsDtos(query);
        return dtos.get(0);
    }

}
