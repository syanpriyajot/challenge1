package com.nab.currency.app.util;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.nab.currency.app.dto.Currency;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.ResourceUtils;

import java.io.IOException;
import java.util.List;

public class JsonUtils {

    private static final Logger logger = LoggerFactory.getLogger(JsonUtils.class);

    public static<T extends Object> T fromJson(String fileName) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            TypeReference<List<Currency>> typeReference = new TypeReference<List<Currency>>() {};
            return objectMapper.readValue(ResourceUtils.getURL(fileName), typeReference);
        }
        catch (IOException e) {
            e.printStackTrace();
            logger.info("Exception while converting file to json", e);
        }
        return null;
    }

}
