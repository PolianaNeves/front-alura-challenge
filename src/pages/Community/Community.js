import ProjectCardList from "../../components/ProjectCardList/ProjectCardList";
import { ConnectionFactory } from '../../services/ConnectionFactory';
import { useState } from 'react';
import { ProjectDao } from '../../dao/ProjectDao';

export default function CommunityPage(props) {

    const [projects, setProjects] = useState([]);

    ConnectionFactory
        .getConnection()
        .then(connection => new ProjectDao(connection))
        .then(dao => dao.listaTodos())
        .then(projects => setProjects(projects))
        .catch(error => console.error(error));

    return <ProjectCardList projects={projects}/>;
}
