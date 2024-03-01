import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Home',
    path: '/',
    icon: icon('ic_home'),
  },
  {
    title: 'chat View',
    path: '/chat-view',
    icon: icon('ic_analytics'),
  },
];

export default navConfig;
