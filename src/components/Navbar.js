const Navbar = () => {
  const imdbLogo = "https://imgur.com/6lfHB3S.png";
  const instagramLogo = "https://i.imgur.com/DPyeDF3.png";
  const bkreativLogo =
    "https://www.officialbkp.com/assets/img/bkreative-logo-wide.png";
  const imdbLink = "https://www.imdb.com/name/nm4353653/";
  const instagramLink = "https://www.instagram.com/uzairmerchant/";

  return (
    <nav className="fixed w-full bg-black text-gold p-4 z-50">
      <div className="container mx-auto  flex items-center justify-between">
        <a href="/">
          <img
            src={bkreativLogo}
            alt="bKREATIV Productions"
            className="w-40 h-auto"
          />
        </a>
        <ul className="flex items-center space-x-4">
          <li>
            <a href={imdbLink} target="_blank" rel="noopener noreferrer">
              <img
                src={imdbLogo}
                alt="IMDb"
                className="max-w-full max-h-full"
                width="50"
              />
            </a>
          </li>
          <li>
            <a href={instagramLink} target="_blank" rel="noopener noreferrer">
              <img
                src={instagramLogo}
                alt="Instagram"
                className="max-w-full max-h-full"
                width="50"
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
