package org.hubson404.pracadomowa7.news;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class ExceptionHandlerController {

    @ExceptionHandler(DataProcessingException.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ErrorInformation handle(DataProcessingException exception) {
        String errorDetails = exception.getMessage();
        return new ErrorInformation(errorDetails);
    }

    @ExceptionHandler(ExternalApiConnectionFailureException.class)
    @ResponseStatus(HttpStatus.SERVICE_UNAVAILABLE)
    public ErrorInformation handle(ExternalApiConnectionFailureException exception) {
        String errorDetails = exception.getMessage();
        return new ErrorInformation(errorDetails);
    }


}
