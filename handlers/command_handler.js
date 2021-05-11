const fs = require('fs');

module.exports = (bot, Discord) => {
    fs.readdirSync(`${process.cwd()}/Commands/`).forEach(dir => {

        fs.readdir(`${process.cwd()}/Commands/${dir}/`, (err, files) => {
        
            if (err) throw new Error(err);

            files.forEach(file => {

                const props = require(`${process.cwd()}/Commands/${dir}/${file}`);
                
                    client.commands.set(props.help.name, props);
                
                    console.log(chalk.white('[Command-loading-logs] All commands loaded successful: ')+chalk.red(`${file}`));
            })
        })
    })
}