package org.hubson404.pracadomowa7.news;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class NewsController {

    private final RemoteNewsService remoteNewsService;
    private final NewsDao newsDao;

    @GetMapping("/news")
    public List<NewsDto> findAll() {
        remoteNewsService.updateDatabase();
        List<NewsDto> news = newsDao.findAll();
        return news;
    }

    @GetMapping("/news/{id}")
    public NewsDto findNewsById(@PathVariable int id) {
        NewsDto newsById = newsDao.findById(id);
        return newsById;
    }

    @PutMapping("/news/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void modifyNews(@RequestBody NewsDto newsDto, @PathVariable int id) {
        newsDao.update(newsDto, id);
    }


}
