import ReactPlayer from "react-player";

const VideoPlayer = ({ playList, index }) => {
  return (
    <>
      <h2>Subject N/A Video </h2>
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={"videos/이재영_기본.MP4"} // 플레이어 url
          width="800px" // 플레이어 크기 (가로)
          height="auto" // 플레이어 크기 (세로)
          playing={true} // 자동 재생 on
          muted={true} // 자동 재생 on
          controls={true} // 플레이어 컨트롤 노출 여부
          light={false} // 플레이어 모드
          pip={true} // pip 모드 설정 여부
          poster={"videos/이재영_기본.MP4"} // 플레이어 초기 포스터 사진
          //onEnded={() => handleVideo()} // 플레이어 끝났을 때 이벤트
        />
      </div>
    </>
  );
};

export default VideoPlayer;
