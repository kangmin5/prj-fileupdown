package com.utosoftware.fileupdown.service;

import com.utosoftware.fileupdown.entity.Attachment;
import com.utosoftware.fileupdown.repository.AttachmentRepository;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class AttachmentServiceImpl implements AttachmentService{

    private final AttachmentRepository repository;

    public AttachmentServiceImpl(AttachmentRepository repository) {
        this.repository = repository;
    }

    //저장 메서드
    @Override
    public Attachment saveAttachment(MultipartFile file) throws Exception {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        try{
            if(fileName.contains("..")){
                throw new Exception("파일명이 올바르지 않습니다." +fileName);
            }
            Attachment attachment = new Attachment(
                    fileName,
                    file.getContentType(),
                    file.getBytes() );
            return repository.save(attachment);
        } catch (Exception e){
            throw new Exception("파일을 저장할 수 없습니다."+ fileName);

        }
    }
    // 읽어오기
    @Override
    public Attachment getAttachment(String fileId) throws Exception {
        return repository
                .findById(fileId)
                .orElseThrow(
                        ()-> new Exception("아이디를 가진 파일을 못 찾았습니다."+ fileId)
                );
    }

    @Override
    public List<Object[]> fileList() {
        return repository.fileList();
    }


}
