jekyll_config = {
  :serve => true,
  :drafts => true,
  :future => true
}

guard "jekyll_plus", jekyll_config do
  watch /.*/
  ignore /^_site/
end

guard 'livereload' do
  watch /.*/
end
