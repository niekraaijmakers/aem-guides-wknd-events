package com.adobe.aem.guides.wkndevents.core.chunks.impl;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.google.common.collect.ImmutableMap;

import java.util.Map;

/**
 * WHAT IS IT ???
 * <p>
 * WHAT PURPOSE THAT IT HAS ???
 * </p>
 *
 * @author raaijmak@adobe.com
 * @since 2020-04-02
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class AngularStatsManifest {
    
    private Map<String,Object> assetsByChunkName;
    
    private String publicPath;
    
    public Map<String, Object> getAssetsByChunkName() {
        return ImmutableMap.copyOf(assetsByChunkName);
    }
    
    public String getPublicPath() {
        return publicPath;
    }
}
