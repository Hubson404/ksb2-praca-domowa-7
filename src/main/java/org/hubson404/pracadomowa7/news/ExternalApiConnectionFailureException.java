package org.hubson404.pracadomowa7.news;

public class ExternalApiConnectionFailureException extends RuntimeException {
    public ExternalApiConnectionFailureException(String message) {
        super(message);
    }
}
