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
    name: 'projects',
    component: Projects
  },
  {
    label: 'Misc',
    path: '/misc',
    name: 'misc',
    component: Misc
  },
  {
    label: 'Info',
    path: '/info',
    name: 'info',
    component: Info
  },
  {
    label: 'Contact',
    path: '/contact',
    name: 'contact',
    component: Contact
  }
];

//dynamically create routes for projects
ProjectsDatas.main.forEach(project => {
  routes.push(
    {
      label: project.uid,
      path: ProjectsDatas.routesPath + project.uid,
      name: 'project-'+project.uid,
      component: ProjectsComponents[project.uid].default,
      meta: { color: project.colorCase, isNavHidden: true }
    }
  );
});

export default routes;
