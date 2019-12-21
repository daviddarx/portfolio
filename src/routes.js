import Projects from './components/projects.vue';
import Misc from './components/misc.vue';
import Info from './components/info.vue';
import Contact from './components/contact.vue';
import * as ProjectsComponents from './projects/*.vue';
import * as ProjectsDatas from '../content/projects.json';

//basic routes
let routes = [
  {
    path: '/',
    redirect: '/projects'
  },
  {
    label: 'Projects',
    path: '/projects',
    component: Projects
  },
  {
    label: 'Misc',
    path: '/misc',
    component: Misc
  },
  {
    label: 'Info',
    path: '/info',
    component: Info
  },
  {
    label: 'Contact',
    path: '/contact',
    component: Contact
  }
];

//dynamically create routes for projects
ProjectsDatas.main.forEach(project => {
  routes.push(
    {
      label: project.uid,
      path: ProjectsDatas.routesPath + project.uid,
      component: ProjectsComponents[project.uid].default,
      meta: { color: project.colorCase }
    }
  );
});

export default routes;
