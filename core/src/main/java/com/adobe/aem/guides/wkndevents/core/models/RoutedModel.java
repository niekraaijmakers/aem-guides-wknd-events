package com.adobe.aem.guides.wkndevents.core.models;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RoutedModel
 * <p>
 * Marks the component as routed, so that links under the component will be treated as internal Single Page Application links.
 * </p>
 *
 * @author raaijmak@adobe.com
 * @since 2020-07-14
 */
public interface RoutedModel {
    
    @JsonProperty("routed")
    default boolean isRouted(){
        return true;
    }
}
