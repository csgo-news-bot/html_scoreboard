import imgkit
# TODO: move to csgo news bot plugin and replace it to nginx dockerfile
imgkit.from_file('html/build/index.html', 'var/out.jpg')
