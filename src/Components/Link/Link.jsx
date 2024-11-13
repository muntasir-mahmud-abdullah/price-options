const Link = ({route}) => {
    return (
        <div>
            <li className="mr-6 p-2 hover:bg-gray-200" key={route.id}> <a href={route.path}>{route.name}</a> </li>
        </div>
    );
};

export default Link;