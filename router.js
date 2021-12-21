
import renderMain from '/pages/main/main.js';
import renderCandidates from '/pages/candidates/candidates.js';
import renderAdd from './pages/add/add.js';
import renderEdit from './pages/edit/edit.js';

export default () => {
  const router = new Navigo('/', { hash: true });
  window.router = router;
  router
    .on({
      '/': () => {
        renderMain().then(router.updatePageLinks);
        console.log('User requested main page');
      },
      candidates: () => {
        renderCandidates().then(router.updatePageLinks);
        console.log('User requested candidate page');
      },
      add: () => {
        renderAdd().then(router.updatePageLinks);
        console.log('User requested add page');
      },
      edit: () => {
        renderEdit().then(router.updatePageLinks);
        console.log('User requested edit page');
      },
    })
    .resolve();
};