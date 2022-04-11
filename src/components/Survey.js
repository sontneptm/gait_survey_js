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
        <SurveyRow
          l_name={"즐거움"}
          one={3}
          two={2}
          three={1}
          four={0}
          five={1}
          six={2}
          seven={3}
          r_name={"슬픔"}
        />
      </div>
    </div>
  );
}

export default Survey;
