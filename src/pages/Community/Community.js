import ProjectCardList from "../../components/ProjectCardList/ProjectCardList";
import { ConnectionFactory } from '../../services/ConnectionFactory';
import { useState, useEffect } from 'react';
import { ProjectDao } from '../../dao/ProjectDao';

export default function CommunityPage(props) {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        ConnectionFactory
            .getConnection()
            .then(connection => new ProjectDao(connection))
            .then(dao => dao.listaTodos())
            .then(projects => setProjects(projects))
            .catch(error => console.error(error));
        ConnectionFactory._closeConnection();
    }, [])


    return <ProjectCardList projects={projects}/>;
}
