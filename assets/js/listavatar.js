function fill_op() {
    $('[data-toggle="tooltip"]').tooltip('hide');
    $('[role="tooltip"]').remove();
    $.get("/services/get_online.php", function(data) {
            json_data = JSON.parse(data);
            var content = ""
            json_data.forEach(player => {
                let balance = parseInt(player.balance).toFixed(0).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
                c_str = `<img class='skin-head ' src='https://minotar.net/avatar/${player.username}/30'
                    data-toggle="tooltip" data-html="true" title="<b>${player.realname}</b>"/>`
                content += c_str
            })
            $("#players_online").html(content);
        })
        .done(function() {
            $('[data-toggle="tooltip"]').tooltip();
        });
};
