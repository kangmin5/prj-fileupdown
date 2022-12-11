package com.utosoftware.fileupdown.repository;

import com.utosoftware.fileupdown.entity.Attachment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AttachmentRepository extends JpaRepository<Attachment,String> {
    @Query(value = "SELECT  id,file_name,file_type FROM attachment  ",nativeQuery = true)
    List<Object[]> fileList();

}
