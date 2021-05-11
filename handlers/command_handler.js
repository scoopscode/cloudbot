const fs = require('fs');

module.exports = (bot, Discord) => {
    fs.readdirSync(`${process.cwd()}/commands/`).forEach(dir => {

        fs.readdir(`${process.cwd()}/commands/${dir}/`, (err, files) => {
        
            if (err) throw new Error(err);

            files.forEach(file => {

                const props = require(`${process.cwd()}/commands/${dir}/${file}`);
                
                    bot.commands.set(props.help.name, props);
                
                    console.log(chalk.white('[Command-loading-logs] All commands loaded successful: ')+chalk.red(`${file}`));
            })
        })
    })
}