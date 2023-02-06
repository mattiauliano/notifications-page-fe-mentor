import { useState } from "react";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(true);
  }

  return (
    <div className="container">
      <div className="notifications-bar">
        <h1>
          Notifications <span className="number">{isClicked ? "0" : "3"}</span>
        </h1>
        <p onClick={handleClick}>Mark all as read</p>
      </div>

      <div className="notifications">
        <div
          className={`notification ${isClicked ? null : "notification-unread"}`}
        >
          <img
            className="avatar"
            src="public/avatar-mark-webber.webp"
            alt="Avatar Mark Webber"
          />
          <div className="content">
            <p>
              <strong>Mark Webber</strong>
              <span className="notification-color"> reacted to your post</span>
              <span className="react-color"> My first tournament today!</span>
              <span className="notification-icon">
                {isClicked ? null : "•"}
              </span>
            </p>
            <p className="time-ago">1m ago</p>
          </div>
        </div>
        <div
          className={`notification ${isClicked ? null : "notification-unread"}`}
        >
          <img
            src="public/avatar-angela-gray.webp"
            alt="Avatar Angela Gray"
            className="avatar"
          />
          <div className="content">
            <p>
              <strong>Angela Gray</strong>
              <span className="notification-color"> followed you</span>
              <span className="notification-icon">
                {isClicked ? null : "•"}
              </span>
            </p>
            <p className="time-ago">5m ago</p>
          </div>
        </div>
        <div
          className={`notification ${isClicked ? null : "notification-unread"}`}
        >
          <img
            src="public/avatar-jacob-thompson.webp"
            alt="Avatar Jacob Thompson"
            className="avatar"
          />
          <div className="content">
            <p>
              <strong>Jacob Thompson</strong>
              <span className="notification-color"> has joined your group</span>
              <span className="club"> Chess Club</span>
              <span className="notification-icon">
                {isClicked ? null : "•"}
              </span>
            </p>
            <p className="time-ago">1d ago</p>
          </div>
        </div>

        <div className="notification">
          <img
            src="public/avatar-rizky-hasanuddin.webp"
            alt="Avatar Rizky Hasanuddin"
            className="avatar"
          />
          <div className="content">
            <p>
              <strong>Rizky Hasanuddin</strong>
              <span className="notification-color">
                {" "}
                sent you a private message
              </span>
            </p>
            <p className="time-ago">5d ago</p>
            <div className="message">
              Hello, thanks for setting up the Chess Club. I've been a member
              for a few weeks now and I'm already having lots of fun and
              improving my game.
            </div>
          </div>
        </div>
        <div className="notification">
          <img
            src="public/avatar-kimberly-smith.webp"
            alt="Avatar Angela Gray"
            className="avatar"
          />
          <div className="content push">
            <p>
              <strong>Kimberly Smith</strong>
              <span className="notification-color">
                {" "}
                commented on your picture
              </span>
            </p>
            <p className="time-ago">1w ago</p>
          </div>
          <img
            src="public/image-chess.webp"
            alt="Chess Player"
            className="my-post"
          />
        </div>
        <div className="notification">
          <img
            className="avatar"
            src="public/avatar-nathan-peterson.webp"
            alt="Avatar Nathan Peterson"
          />
          <div className="content">
            <p>
              <strong>Nathan Peterson</strong>
              <span className="notification-color"> reacted to your post</span>
              <span className="react-color">
                {" "}
                5 end-game strategies to increase your win rate
              </span>
            </p>
            <p className="time-ago">2w ago</p>
          </div>
        </div>
        <div className="notification">
          <img
            src="public/avatar-anna-kim.webp"
            alt="Avatar Anna Kim"
            className="avatar"
          />
          <div className="content">
            <p>
              <strong>Anna Kim</strong>
              <span className="notification-color"> left the group</span>
              <span className="club"> Chess Club</span>
            </p>
            <p className="time-ago">2w ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
