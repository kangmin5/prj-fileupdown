package com.utosoftware.fileupdown.service;

import com.utosoftware.fileupdown.entity.Attachment;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface AttachmentService {
    Attachment saveAttachment(MultipartFile file) throws Exception;


    Attachment getAttachment(String fileId) throws Exception;


    List<Object[]> fileList();
}
