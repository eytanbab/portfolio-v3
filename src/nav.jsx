// eslint-disable-next-line react/prop-types
const Nav = ({ active }) => {
  const handleClickScroll = (scrollToElement) => {
    const element = document.getElementById(scrollToElement);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='w-full max-w-96 fixed top-0 h-20 z-10 flex justify-center items-center'>
      <div
        className='absolute inset-0 h-full'
        style={{
          backgroundColor: 'transparent',
          backgroundImage:
            'radial-gradient(transparent 1px, var(--token-f32baa44-90b8-42a5-8bca-ffba9d95b23a, #020617) 1px)',
          backgroundSize: '4px 4px',
          backdropFilter: 'blur(8px)',
          mask: 'linear-gradient(rgb(0, 0, 0) 60%, rgba(0, 0, 0, 0) 100%)',
          opacity: 1,
        }}
      />
      <div className='z-20 text-slate-300 flex gap-16 font-light'>
        <a
          onClick={() => handleClickScroll('about')}
          className={`${
            active === 'about' ? 'text-slate-50 font-semibold scale-105' : ''
          } cursor-pointer transition-all duration-300 ease-in-out`}
        >
          About
        </a>
        <a
          onClick={() => handleClickScroll('projects')}
          className={`${
            active === 'projects' ? 'text-slate-50 font-semibold scale-105' : ''
          } cursor-pointer transition-all duration-300 ease-in-out`}
        >
          Projects
        </a>
        <a
          onClick={() => handleClickScroll('music')}
          className={`${
            active === 'music' ? 'text-slate-50 font-semibold scale-105' : ''
          } cursor-pointer transition-all duration-300 ease-in-out`}
        >
          Music
        </a>
      </div>
    </div>
  );
};

export default Nav;
