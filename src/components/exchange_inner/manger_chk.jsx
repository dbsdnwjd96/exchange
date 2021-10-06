// eslint-disable-next-line
import React from 'react';
import styled from 'styled-components';



function ManagerChk () {
    return(
        <div>
            <div className="background">
                <div className="manager_chk">
                    <div className="popup_area">
                        <div className="popup_inner">
                            <form action="">
                                <div>관리자 확인</div>
                                <div>수령 확인하시겠습니까?</div>
                                <div className="input_box">
                                    <input type="text" placeholder="관리자 비밀번호 입력" />
                                </div>
                                <div>
                                    <button>취소</button>
                                    <button type="submit" className="btnBlue">확인</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManagerChk;