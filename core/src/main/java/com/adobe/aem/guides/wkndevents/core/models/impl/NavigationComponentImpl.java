package com.adobe.aem.guides.wkndevents.core.models.impl;

import com.adobe.aem.guides.wkndevents.core.models.RoutedModel;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.adobe.cq.wcm.core.components.models.Navigation;
import com.adobe.cq.wcm.core.components.models.NavigationItem;
import com.adobe.cq.wcm.core.components.models.datalayer.ComponentData;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Via;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.via.ForcedResourceType;

import java.util.List;

@Model(adaptables = SlingHttpServletRequest.class, adapters = {Navigation.class, ComponentExporter.class}, resourceType = "wknd-events/components/content/core/navigation")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class NavigationComponentImpl implements Navigation, RoutedModel {
    
    @Self @Via(type = ForcedResourceType.class, value = "core/wcm/components/navigation/v1/navigation") @JsonIgnore
    private Navigation delegate;
    
    @SlingObject
    private Resource resource;
    
    @Override
    public List<NavigationItem> getItems() {
        return delegate.getItems();
    }
    
    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }
    
    @Override
    public String getAccessibilityLabel() {
        return delegate.getAccessibilityLabel();
    }
    
    @Override
    public String getId() {
        return delegate.getId();
    }
    
    @Override
    public ComponentData getData() {
        return delegate.getData();
    }
}
