package com.kk.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import com.kk.domain.vo.WorkVO;
import com.kk.domain.WorkExample;
import com.kk.domain.Work;

public interface WorkMapper {
	
	//扩展的mapper接口方法
	int deleteBatch(String[] ids);
	
	List<WorkVO> find();

	List<WorkVO> searchWorkByWorkId(String workId);

	List<WorkVO> searchWorkByWorkProduct(String workProduct);

	List<WorkVO> searchWorkByWorkDevice(String workDevice);

	List<WorkVO> searchWorkByWorkProcess(String workProcess);
	
	//逆向工程生成的mapper接口
    int countByExample(WorkExample example);

    int deleteByExample(WorkExample example);

    int deleteByPrimaryKey(String workId);

    int insert(Work record);

    int insertSelective(Work record);

    List<Work> selectByExample(WorkExample example);

    Work selectByPrimaryKey(String workId);

    int updateByExampleSelective(@Param("record") Work record, @Param("example") WorkExample example);

    int updateByExample(@Param("record") Work record, @Param("example") WorkExample example);

    int updateByPrimaryKeySelective(Work record);

    int updateByPrimaryKey(Work record);
}