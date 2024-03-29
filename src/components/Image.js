import { format } from 'date-fns';
import Card from './Card';

function Image(props) {
  const userProfile = `https://unsplash.com/@${props.user.username}`;
  return (
    <>
      {console.log(props)}
      <Card className="hover:-translate-y-1 bg-skin-card">
        {/* Image */}
        <a
          href={props.links.html}
          target="_blank"
          rel="noopener noreferrer"
          className="shadow-lg"
        >
          <img
            src={props.urls.regular}
            alt={props.user.name}
            loading="lazy"
            className="h-52 w-full object-cover rounded-3xl md:h-80"
          />
        </a>

        {/* container for items below image */}
        <article className="flex items-center justify-between flex-wrap">
          <div className="pt-5 flex items-center justify-start">
            {/* Profile Photo of Uploader */}
            <img
              src={props.user.profile_image.large}
              alt={props.user.name}
              loading="lazy"
              className="w-10 rounded-full"
            />

            {/* username and date of upload */}
            <ul className="ml-3">
              <a
                href={userProfile}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-slate-800 mb-1"
              >
                {props.user.name}
              </a>

              <li className="text-slate-600 text-sm">
                {format(new Date(props.created_at), 'dd MMMM yyyy')}
              </li>
            </ul>
          </div>

          {/* likes and instagram */}
          <div className="pt-7">
            <ul className="text-slate-600 text-sm text-right">
              <li>
                <i className="fa-regular fa-heart mr-1"></i>
                {props.likes}
              </li>
              <li>
                {!props.user.instagram_username ? (
                  ''
                ) : (
                  <a
                    href={`https://instagram.com/${props.user.instagram_username}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>
                      <i className="fa-brands fa-instagram pr-1"></i>
                      Instagram
                    </span>
                  </a>
                )}
              </li>
            </ul>
          </div>
        </article>
      </Card>
    </>
  );
}

export default Image;
