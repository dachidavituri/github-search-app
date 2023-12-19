import location from "./assets/icon-location.svg";
import website from "./assets/icon-website.svg";
import company from "./assets/icon-company.svg";
import twitter from "./assets/icon-twitter.svg";
interface ContentProps {
  user: {
    login: string;
    avatar_url: string;
    name: string;
    created_at: string;
    bio: string | null;
    public_repos: number;
    followers: number;
    following: number;
    location: string;
    blog: string;
    twitter_username: string | null;
    company: string;
  } | null;
}
const Content: React.FC<ContentProps> = ({ user }) => {
  const convertDate = (date1: string) => {
    const date2 = new Date(date1);
    const dateString = date2.toDateString();
    const [month, date, year] = dateString.split(" ");
    return `Joined ${date} ${month} ${year}`;
  };
  return (
    <div className="content-container">
      <img src={user?.avatar_url} className="avatar-for-desktop" alt="avatar"/>
      <div>
        <div className="name-section">
          <img src={user?.avatar_url} className="avatar" alt="avatar"/>
          <div>
            <div>
              <h2 className="name">{user?.name}</h2>
              <p className="login">@{user?.login}</p>
            </div>
            <p className="date">{convertDate(user?.created_at ?? "")}</p>
          </div>
        </div>

        <p className="description">
          {user?.bio ? (
            user.bio
          ) : (
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros.
            </p>
          )}
        </p>
        <div className="statistics">
          <div className="amount">
            <h3 className="amount-name">Repos</h3>
            <p className="quantity repo">{user?.public_repos}</p>
          </div>
          <div className="amount">
            <h3 className="amount-name">Followers</h3>
            <p className="quantity follower">{user?.followers}</p>
          </div>
          <div className="amount">
            <h3 className="amount-name">Following</h3>
            <p className="quantity following">{user?.following}</p>
          </div>
        </div>
        <div className="social">
          <div className="block">
            <div className="section">
              <img src={location} alt="location"/>
              <p className={user?.location ? "" : "notAvaliable"}>
                {user?.location ? user?.location : "Not avaliable"}
              </p>
            </div>
            <div className="section">
              <img src={website} alt="website"/>
              <a
                href={user?.blog ? user?.blog : "#"}
                className={user?.location ? "" : "notAvaliable"}
              >
                {user?.blog ? user?.blog : "Not avaliable"}
              </a>
            </div>
          </div>
          <div className="block">
            <div className="section">
              <img src={twitter} alt="twitter"/>
              <p className={user?.location ? "" : "notAvaliable"}>
                {user?.twitter_username
                  ? user?.twitter_username
                  : "Not avaliable"}
              </p>
            </div>
            <div className="section">
              <img src={company} alt="company"/>
              <p className={user?.location ? "" : "notAvaliable"}>
                {user?.company ? user?.company : "Not avaliable"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
