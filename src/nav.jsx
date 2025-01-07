const Nav = () => {
  return (
    <div className='w-full relative h-20 bg-slate-950'>
      <div
        className='absolute inset-0 h-full'
        style={{
          backgroundColor: 'transparent',
          backgroundImage:
            'radial-gradient(transparent 1px, var(--token-f32baa44-90b8-42a5-8bca-ffba9d95b23a, #ffffff94) 1px)',
          backgroundSize: '4px 4px',
          backdropFilter: 'blur(8px)',
          mask: 'linear-gradient(rgb(0, 0, 0) 60%, rgba(0, 0, 0, 0) 100%)',
          opacity: 1,
        }}
      />
    </div>
  );
};

export default Nav;
