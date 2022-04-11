import CheckBox from "./CheckBox";
import SurveyRow from "./SurveyRow";

function Survey() {
  return (
    <div>
      {/* <div>
        <h3> 해당 영상을 보고 느껴지는 보행자의 감정을 선택해주세요</h3>
      </div>
      <CheckBox /> */}
      <div>
        <p>해당 영상을 보고 느껴지는 보행자의 감정을 선택해주세요</p>
        <SurveyRow l_name={"느긋한"} r_name={"긴장한"} />
        <SurveyRow l_name={"침착한"} r_name={"흥분한"} />
        <SurveyRow l_name={"들뜬"} r_name={"우울한"} />
        <SurveyRow l_name={"활기찬"} r_name={"무기력한"} />
        <SurveyRow l_name={"기쁜"} r_name={"슬픈"} />
        <SurveyRow l_name={"쾌활한"} r_name={"피로한"} />
        <SurveyRow l_name={"평온한"} r_name={"신경질적인"} />
        <SurveyRow l_name={"만족한"} r_name={"화가난"} />
      </div>
    </div>
  );
}

export default Survey;
