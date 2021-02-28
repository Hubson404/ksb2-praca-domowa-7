package org.hubson404.pracadomowa7.news;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Map;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ErrorInformation {

    private Map<String, List<String>> errors;
    private String errorMessage;

    public ErrorInformation(Map<String, List<String>> errors) {
        this.errors = errors;
    }

    public ErrorInformation(String errorMessage) {
        this.errorMessage = errorMessage;
    }
}
