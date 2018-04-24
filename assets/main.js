$(function() {
  const DESKTOP_SIDEBAR = 'desktop';
  const MOBILE_SIDEBAR = 'mobile';

  const isMobile = () => $(window).width() <= 768;

  let activeSidebar;

  const showDesktopSidebar = () => {
    $('#mobile-sidebar').hide();
    $('#desktop-sidebar').show();
    activeSidebar = DESKTOP_SIDEBAR;
  }

  const showMobileSidebar = () => {
    $('#desktop-sidebar').hide();
    $('#mobile-sidebar').show();
    activeSidebar = MOBILE_SIDEBAR;
  }

  const animations = {
    [DESKTOP_SIDEBAR]: () => {
      showMobileSidebar();
    },
    [MOBILE_SIDEBAR]: () => {
      showDesktopSidebar();
    }
  };

  const initSidebar = () => {
    return isMobile()
      ? showMobileSidebar()
      : showDesktopSidebar()
  }

  $('.sidebar-toggler').on('click', () => animations[activeSidebar]());

  initSidebar();
  $('.dropdown').dropdown();
  $('.ui.accordion').accordion();

  $(window).resize(() => {
    initSidebar();
  });
});
