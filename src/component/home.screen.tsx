import React from 'react'

// Image URLs from Figma
const imgGroup = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/mcp/get_code/assets/551a4364-d986-4f24-8220-94cf7572c6da/figma%3Aasset/7a7701c360c19bd9404434b0cffc74ba30356b5c.svg?AWSAccessKeyId=ASIAQ4GOSFWC34HBLQK6&Expires=1760661893&Signature=FMfUz0fzrPsADWl%2Bow9nvD15wek%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD6zpryRn3s8gbDN7mId3JdlLmF6GpsybNo0pItx2WjAIgZCMNnCvPf9khJXd8DVjF21kIQOyJNhwIB7VTu5at9y8qhwUIORAAGgwwNjA1NjI3NDY3NTciDHUCni1pRTkKpWx6xirkBAh3MjzW2bYdrRaiaNoBq1zqYqAJNHvVGK6H%2BObDdD7Sa0rZKH%2FAqytfq4J2xwq%2FM7kcyJnlddbE9SgUg1ZMUxjHMqDRCDXNxO%2Bw%2B0vXq6KAiU3yAUqKSxgN4%2FePW2qRb1ee9yvNNDxqQVJm6HwjyswvhC71v964FZ0crL%2FAo1xfr3KzzmcDsqDV1%2FEQxHPj4ClbnnjL%2FnIdLsbS%2FqMGh7fTvr%2BRD1TB0iA3yA4O6ZQ4Sss4KbElQGRouGexirZrbx9ASz6ybEL%2FJXUFin1s4prpmdJZ5Jsg63Ar247Tq31NzKVl6HC%2FSXXm00Pv5x2hhtLZuKZRyjUZDbGnrwnCPNeZQFHIQX%2BasxZcssYqzFyW40c1LQMraxx3vUBmi3cS3k%2Fr15zXYKlAuV61OgoEPVP5pu3gZB8Ke7pH9t02ANQCL7RPWRfgBH%2FGHbmLwFTJJVUAjNLA1n7GESxjDU15FIjIDpC7zSNvw%2FOO6ni66bTnoIrX8GTNUyFrhHGQn1vCVVTn8GAwJgz%2FndH8FajJ5CpmSejzbd7J891Bo1ah%2BhkOUXWYkLyw%2F%2BwuEdnwd2mcjuY%2FRx1VvWalpvN9ZWEsvEZohWGJOs%2BHT76cv6oSp7yTci2iPDquOxZo4creVlSbty5bP7jdK7zdW9N7ec%2BgshthYkVAbHY5yieZTc8OIG9FcaJ7s8GbyNGnQK3YuTzUTxF0vt8v%2FTB%2F5n8Q98K5XwqVzUb9kD4InT2RiuI9ZO6qpDCLwDdhxOu7ZH2MGsFpwMFTdP4q6rEDaiurqy%2B54xkvJdh9%2FwSiI6d5Zqm%2BYwZd1Uyc5DCMn%2FzGBjqbAcfT3pVFH9mgDF%2FRw2SAgYvIaMb2IGc%2FecdQDXYaapHctumr%2B6afOP4bBeEsRZDmnj3zU78kPMXa%2FMTNi7gjO6tZcdMv6f0smropkG%2FLnyH9jJyQUTd8pQ%2B071gyGqsX3r45aTMJ6Ddw2DzT4ctKQzh4QlmWVrjGklS%2FhBuj3eCfyJ2doVsy9MpJPEzlOjW4aNfBaBUARH7q4quy";
const img = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/mcp/get_code/assets/551a4364-d986-4f24-8220-94cf7572c6da/figma%3Aasset/81940dc7287c79b5aed0624932fed30b50eb8323.svg?AWSAccessKeyId=ASIAQ4GOSFWC34HBLQK6&Expires=1760661893&Signature=jSKAn3rASn5cUMsVFbRyEyDP9PA%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD6zpryRn3s8gbDN7mId3JdlLmF6GpsybNo0pItx2WjAIgZCMNnCvPf9khJXd8DVjF21kIQOyJNhwIB7VTu5at9y8qhwUIORAAGgwwNjA1NjI3NDY3NTciDHUCni1pRTkKpWx6xirkBAh3MjzW2bYdrRaiaNoBq1zqYqAJNHvVGK6H%2BObDdD7Sa0rZKH%2FAqytfq4J2xwq%2FM7kcyJnlddbE9SgUg1ZMUxjHMqDRCDXNxO%2Bw%2B0vXq6KAiU3yAUqKSxgN4%2FePW2qRb1ee9yvNNDxqQVJm6HwjyswvhC71v964FZ0crL%2FAo1xfr3KzzmcDsqDV1%2FEQxHPj4ClbnnjL%2FnIdLsbS%2FqMGh7fTvr%2BRD1TB0iA3yA4O6ZQ4Sss4KbElQGRouGexirZrbx9ASz6ybEL%2FJXUFin1s4prpmdJZ5Jsg63Ar247Tq31NzKVl6HC%2FSXXm00Pv5x2hhtLZuKZRyjUZDbGnrwnCPNeZQFHIQX%2BasxZcssYqzFyW40c1LQMraxx3vUBmi3cS3k%2Fr15zXYKlAuV61OgoEPVP5pu3gZB8Ke7pH9t02ANQCL7RPWRfgBH%2FGHbmLwFTJJVUAjNLA1n7GESxjDU15FIjIDpC7zSNvw%2FOO6ni66bTnoIrX8GTNUyFrhHGQn1vCVVTn8GAwJgz%2FndH8FajJ5CpmSejzbd7J891Bo1ah%2BhkOUXWYkLyw%2F%2BwuEdnwd2mcjuY%2FRx1VvWalpvN9ZWEsvEZohWGJOs%2BHT76cv6oSp7yTci2iPDquOxZo4creVlSbty5bP7jdK7zdW9N7ec%2BgshthYkVAbHY5yieZTc8OIG9FcaJ7s8GbyNGnQK3YuTzUTxF0vt8v%2FTB%2F5n8Q98K5XwqVzUb9kD4InT2RiuI9ZO6qpDCLwDdhxOu7ZH2MGsFpwMFTdP4q6rEDaiurqy%2B54xkvJdh9%2FwSiI6d5Zqm%2BYwZd1Uyc5DCMn%2FzGBjqbAcfT3pVFH9mgDF%2FRw2SAgYvIaMb2IGc%2FecdQDXYaapHctumr%2B6afOP4bBeEsRZDmnj3zU78kPMXa%2FMTNi7gjO6tZcdMv6f0smropkG%2FLnyH9jJyQUTd8pQ%2B071gyGqsX3r45aTMJ6Ddw2DzT4ctKQzh4QlmWVrjGklS%2FhBuj3eCfyJ2doVsy9MpJPEzlOjW4aNfBaBUARH7q4quy";
const img1 = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/mcp/get_code/assets/551a4364-d986-4f24-8220-94cf7572c6da/figma%3Aasset/c92cd346a5c31b73761c2e0217c2c43f1f730be4.svg?AWSAccessKeyId=ASIAQ4GOSFWC34HBLQK6&Expires=1760661893&Signature=swHFfdDQ69L4P7%2BIklgux7lHhB4%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD6zpryRn3s8gbDN7mId3JdlLmF6GpsybNo0pItx2WjAIgZCMNnCvPf9khJXd8DVjF21kIQOyJNhwIB7VTu5at9y8qhwUIORAAGgwwNjA1NjI3NDY3NTciDHUCni1pRTkKpWx6xirkBAh3MjzW2bYdrRaiaNoBq1zqYqAJNHvVGK6H%2BObDdD7Sa0rZKH%2FAqytfq4J2xwq%2FM7kcyJnlddbE9SgUg1ZMUxjHMqDRCDXNxO%2Bw%2B0vXq6KAiU3yAUqKSxgN4%2FePW2qRb1ee9yvNNDxqQVJm6HwjyswvhC71v964FZ0crL%2FAo1xfr3KzzmcDsqDV1%2FEQxHPj4ClbnnjL%2FnIdLsbS%2FqMGh7fTvr%2BRD1TB0iA3yA4O6ZQ4Sss4KbElQGRouGexirZrbx9ASz6ybEL%2FJXUFin1s4prpmdJZ5Jsg63Ar247Tq31NzKVl6HC%2FSXXm00Pv5x2hhtLZuKZRyjUZDbGnrwnCPNeZQFHIQX%2BasxZcssYqzFyW40c1LQMraxx3vUBmi3cS3k%2Fr15zXYKlAuV61OgoEPVP5pu3gZB8Ke7pH9t02ANQCL7RPWRfgBH%2FGHbmLwFTJJVUAjNLA1n7GESxjDU15FIjIDpC7zSNvw%2FOO6ni66bTnoIrX8GTNUyFrhHGQn1vCVVTn8GAwJgz%2FndH8FajJ5CpmSejzbd7J891Bo1ah%2BhkOUXWYkLyw%2F%2BwuEdnwd2mcjuY%2FRx1VvWalpvN9ZWEsvEZohWGJOs%2BHT76cv6oSp7yTci2iPDquOxZo4creVlSbty5bP7jdK7zdW9N7ec%2BgshthYkVAbHY5yieZTc8OIG9FcaJ7s8GbyNGnQK3YuTzUTxF0vt8v%2FTB%2F5n8Q98K5XwqVzUb9kD4InT2RiuI9ZO6qpDCLwDdhxOu7ZH2MGsFpwMFTdP4q6rEDaiurqy%2B54xkvJdh9%2FwSiI6d5Zqm%2BYwZd1Uyc5DCMn%2FzGBjqbAcfT3pVFH9mgDF%2FRw2SAgYvIaMb2IGc%2FecdQDXYaapHctumr%2B6afOP4bBeEsRZDmnj3zU78kPMXa%2FMTNi7gjO6tZcdMv6f0smropkG%2FLnyH9jJyQUTd8pQ%2B071gyGqsX3r45aTMJ6Ddw2DzT4ctKQzh4QlmWVrjGklS%2FhBuj3eCfyJ2doVsy9MpJPEzlOjW4aNfBaBUARH7q4quy";
const img2 = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/mcp/get_code/assets/551a4364-d986-4f24-8220-94cf7572c6da/figma%3Aasset/df093716b602410364c3e0b026d93cb558c4108c.svg?AWSAccessKeyId=ASIAQ4GOSFWC34HBLQK6&Expires=1760661893&Signature=FiCfjFf0O%2FiMzdkqJmHMOKu9GLk%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD6zpryRn3s8gbDN7mId3JdlLmF6GpsybNo0pItx2WjAIgZCMNnCvPf9khJXd8DVjF21kIQOyJNhwIB7VTu5at9y8qhwUIORAAGgwwNjA1NjI3NDY3NTciDHUCni1pRTkKpWx6xirkBAh3MjzW2bYdrRaiaNoBq1zqYqAJNHvVGK6H%2BObDdD7Sa0rZKH%2FAqytfq4J2xwq%2FM7kcyJnlddbE9SgUg1ZMUxjHMqDRCDXNxO%2Bw%2B0vXq6KAiU3yAUqKSxgN4%2FePW2qRb1ee9yvNNDxqQVJm6HwjyswvhC71v964FZ0crL%2FAo1xfr3KzzmcDsqDV1%2FEQxHPj4ClbnnjL%2FnIdLsbS%2FqMGh7fTvr%2BRD1TB0iA3yA4O6ZQ4Sss4KbElQGRouGexirZrbx9ASz6ybEL%2FJXUFin1s4prpmdJZ5Jsg63Ar247Tq31NzKVl6HC%2FSXXm00Pv5x2hhtLZuKZRyjUZDbGnrwnCPNeZQFHIQX%2BasxZcssYqzFyW40c1LQMraxx3vUBmi3cS3k%2Fr15zXYKlAuV61OgoEPVP5pu3gZB8Ke7pH9t02ANQCL7RPWRfgBH%2FGHbmLwFTJJVUAjNLA1n7GESxjDU15FIjIDpC7zSNvw%2FOO6ni66bTnoIrX8GTNUyFrhHGQn1vCVVTn8GAwJgz%2FndH8FajJ5CpmSejzbd7J891Bo1ah%2BhkOUXWYkLyw%2F%2BwuEdnwd2mcjuY%2FRx1VvWalpvN9ZWEsvEZohWGJOs%2BHT76cv6oSp7yTci2iPDquOxZo4creVlSbty5bP7jdK7zdW9N7ec%2BgshthYkVAbHY5yieZTc8OIG9FcaJ7s8GbyNGnQK3YuTzUTxF0vt8v%2FTB%2F5n8Q98K5XwqVzUb9kD4InT2RiuI9ZO6qpDCLwDdhxOu7ZH2MGsFpwMFTdP4q6rEDaiurqy%2B54xkvJdh9%2FwSiI6d5Zqm%2BYwZd1Uyc5DCMn%2FzGBjqbAcfT3pVFH9mgDF%2FRw2SAgYvIaMb2IGc%2FecdQDXYaapHctumr%2B6afOP4bBeEsRZDmnj3zU78kPMXa%2FMTNi7gjO6tZcdMv6f0smropkG%2FLnyH9jJyQUTd8pQ%2B071gyGqsX3r45aTMJ6Ddw2DzT4ctKQzh4QlmWVrjGklS%2FhBuj3eCfyJ2doVsy9MpJPEzlOjW4aNfBaBUARH7q4quy";
const img3 = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/mcp/get_code/assets/551a4364-d986-4f24-8220-94cf7572c6da/figma%3Aasset/b37bab3a094242bd22d0bad4dd84c00d206323e4.svg?AWSAccessKeyId=ASIAQ4GOSFWC34HBLQK6&Expires=1760661893&Signature=GVX4m%2BbFVz3OkxvK5qgk%2FEF4mHM%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD6zpryRn3s8gbDN7mId3JdlLmF6GpsybNo0pItx2WjAIgZCMNnCvPf9khJXd8DVjF21kIQOyJNhwIB7VTu5at9y8qhwUIORAAGgwwNjA1NjI3NDY3NTciDHUCni1pRTkKpWx6xirkBAh3MjzW2bYdrRaiaNoBq1zqYqAJNHvVGK6H%2BObDdD7Sa0rZKH%2FAqytfq4J2xwq%2FM7kcyJnlddbE9SgUg1ZMUxjHMqDRCDXNxO%2Bw%2B0vXq6KAiU3yAUqKSxgN4%2FePW2qRb1ee9yvNNDxqQVJm6HwjyswvhC71v964FZ0crL%2FAo1xfr3KzzmcDsqDV1%2FEQxHPj4ClbnnjL%2FnIdLsbS%2FqMGh7fTvr%2BRD1TB0iA3yA4O6ZQ4Sss4KbElQGRouGexirZrbx9ASz6ybEL%2FJXUFin1s4prpmdJZ5Jsg63Ar247Tq31NzKVl6HC%2FSXXm00Pv5x2hhtLZuKZRyjUZDbGnrwnCPNeZQFHIQX%2BasxZcssYqzFyW40c1LQMraxx3vUBmi3cS3k%2Fr15zXYKlAuV61OgoEPVP5pu3gZB8Ke7pH9t02ANQCL7RPWRfgBH%2FGHbmLwFTJJVUAjNLA1n7GESxjDU15FIjIDpC7zSNvw%2FOO6ni66bTnoIrX8GTNUyFrhHGQn1vCVVTn8GAwJgz%2FndH8FajJ5CpmSejzbd7J891Bo1ah%2BhkOUXWYkLyw%2F%2BwuEdnwd2mcjuY%2FRx1VvWalpvN9ZWEsvEZohWGJOs%2BHT76cv6oSp7yTci2iPDquOxZo4creVlSbty5bP7jdK7zdW9N7ec%2BgshthYkVAbHY5yieZTc8OIG9FcaJ7s8GbyNGnQK3YuTzUTxF0vt8v%2FTB%2F5n8Q98K5XwqVzUb9kD4InT2RiuI9ZO6qpDCLwDdhxOu7ZH2MGsFpwMFTdP4q6rEDaiurqy%2B54xkvJdh9%2FwSiI6d5Zqm%2BYwZd1Uyc5DCMn%2FzGBjqbAcfT3pVFH9mgDF%2FRw2SAgYvIaMb2IGc%2FecdQDXYaapHctumr%2B6afOP4bBeEsRZDmnj3zU78kPMXa%2FMTNi7gjO6tZcdMv6f0smropkG%2FLnyH9jJyQUTd8pQ%2B071gyGqsX3r45aTMJ6Ddw2DzT4ctKQzh4QlmWVrjGklS%2FhBuj3eCfyJ2doVsy9MpJPEzlOjW4aNfBaBUARH7q4quy";
const img4 = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/mcp/get_code/assets/551a4364-d986-4f24-8220-94cf7572c6da/figma%3Aasset/e9482846cd4c35c72e6aa927c141ada47a670bb8.svg?AWSAccessKeyId=ASIAQ4GOSFWC34HBLQK6&Expires=1760661893&Signature=51c7bXmxWzTuy%2F414t2s8hcdqOY%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD6zpryRn3s8gbDN7mId3JdlLmF6GpsybNo0pItx2WjAIgZCMNnCvPf9khJXd8DVjF21kIQOyJNhwIB7VTu5at9y8qhwUIORAAGgwwNjA1NjI3NDY3NTciDHUCni1pRTkKpWx6xirkBAh3MjzW2bYdrRaiaNoBq1zqYqAJNHvVGK6H%2BObDdD7Sa0rZKH%2FAqytfq4J2xwq%2FM7kcyJnlddbE9SgUg1ZMUxjHMqDRCDXNxO%2Bw%2B0vXq6KAiU3yAUqKSxgN4%2FePW2qRb1ee9yvNNDxqQVJm6HwjyswvhC71v964FZ0crL%2FAo1xfr3KzzmcDsqDV1%2FEQxHPj4ClbnnjL%2FnIdLsbS%2FqMGh7fTvr%2BRD1TB0iA3yA4O6ZQ4Sss4KbElQGRouGexirZrbx9ASz6ybEL%2FJXUFin1s4prpmdJZ5Jsg63Ar247Tq31NzKVl6HC%2FSXXm00Pv5x2hhtLZuKZRyjUZDbGnrwnCPNeZQFHIQX%2BasxZcssYqzFyW40c1LQMraxx3vUBmi3cS3k%2Fr15zXYKlAuV61OgoEPVP5pu3gZB8Ke7pH9t02ANQCL7RPWRfgBH%2FGHbmLwFTJJVUAjNLA1n7GESxjDU15FIjIDpC7zSNvw%2FOO6ni66bTnoIrX8GTNUyFrhHGQn1vCVVTn8GAwJgz%2FndH8FajJ5CpmSejzbd7J891Bo1ah%2BhkOUXWYkLyw%2F%2BwuEdnwd2mcjuY%2FRx1VvWalpvN9ZWEsvEZohWGJOs%2BHT76cv6oSp7yTci2iPDquOxZo4creVlSbty5bP7jdK7zdW9N7ec%2BgshthYkVAbHY5yieZTc8OIG9FcaJ7s8GbyNGnQK3YuTzUTxF0vt8v%2FTB%2F5n8Q98K5XwqVzUb9kD4InT2RiuI9ZO6qpDCLwDdhxOu7ZH2MGsFpwMFTdP4q6rEDaiurqy%2B54xkvJdh9%2FwSiI6d5Zqm%2BYwZd1Uyc5DCMn%2FzGBjqbAcfT3pVFH9mgDF%2FRw2SAgYvIaMb2IGc%2FecdQDXYaapHctumr%2B6afOP4bBeEsRZDmnj3zU78kPMXa%2FMTNi7gjO6tZcdMv6f0smropkG%2FLnyH9jJyQUTd8pQ%2B071gyGqsX3r45aTMJ6Ddw2DzT4ctKQzh4QlmWVrjGklS%2FhBuj3eCfyJ2doVsy9MpJPEzlOjW4aNfBaBUARH7q4quy";
const img5 = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/mcp/get_code/assets/551a4364-d986-4f24-8220-94cf7572c6da/figma%3Aasset/8b6c0483d94f5cf748200f8d27e88b52e19fdc11.svg?AWSAccessKeyId=ASIAQ4GOSFWC34HBLQK6&Expires=1760661893&Signature=rmexZJ45gg0lpkjvFK6J68TJ4sk%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD6zpryRn3s8gbDN7mId3JdlLmF6GpsybNo0pItx2WjAIgZCMNnCvPf9khJXd8DVjF21kIQOyJNhwIB7VTu5at9y8qhwUIORAAGgwwNjA1NjI3NDY3NTciDHUCni1pRTkKpWx6xirkBAh3MjzW2bYdrRaiaNoBq1zqYqAJNHvVGK6H%2BObDdD7Sa0rZKH%2FAqytfq4J2xwq%2FM7kcyJnlddbE9SgUg1ZMUxjHMqDRCDXNxO%2Bw%2B0vXq6KAiU3yAUqKSxgN4%2FePW2qRb1ee9yvNNDxqQVJm6HwjyswvhC71v964FZ0crL%2FAo1xfr3KzzmcDsqDV1%2FEQxHPj4ClbnnjL%2FnIdLsbS%2FqMGh7fTvr%2BRD1TB0iA3yA4O6ZQ4Sss4KbElQGRouGexirZrbx9ASz6ybEL%2FJXUFin1s4prpmdJZ5Jsg63Ar247Tq31NzKVl6HC%2FSXXm00Pv5x2hhtLZuKZRyjUZDbGnrwnCPNeZQFHIQX%2BasxZcssYqzFyW40c1LQMraxx3vUBmi3cS3k%2Fr15zXYKlAuV61OgoEPVP5pu3gZB8Ke7pH9t02ANQCL7RPWRfgBH%2FGHbmLwFTJJVUAjNLA1n7GESxjDU15FIjIDpC7zSNvw%2FOO6ni66bTnoIrX8GTNUyFrhHGQn1vCVVTn8GAwJgz%2FndH8FajJ5CpmSejzbd7J891Bo1ah%2BhkOUXWYkLyw%2F%2BwuEdnwd2mcjuY%2FRx1VvWalpvN9ZWEsvEZohWGJOs%2BHT76cv6oSp7yTci2iPDquOxZo4creVlSbty5bP7jdK7zdW9N7ec%2BgshthYkVAbHY5yieZTc8OIG9FcaJ7s8GbyNGnQK3YuTzUTxF0vt8v%2FTB%2F5n8Q98K5XwqVzUb9kD4InT2RiuI9ZO6qpDCLwDdhxOu7ZH2MGsFpwMFTdP4q6rEDaiurqy%2B54xkvJdh9%2FwSiI6d5Zqm%2BYwZd1Uyc5DCMn%2FzGBjqbAcfT3pVFH9mgDF%2FRw2SAgYvIaMb2IGc%2FecdQDXYaapHctumr%2B6afOP4bBeEsRZDmnj3zU78kPMXa%2FMTNi7gjO6tZcdMv6f0smropkG%2FLnyH9jJyQUTd8pQ%2B071gyGqsX3r45aTMJ6Ddw2DzT4ctKQzh4QlmWVrjGklS%2FhBuj3eCfyJ2doVsy9MpJPEzlOjW4aNfBaBUARH7q4quy";

// Header Component
function Header({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="absolute bg-white bottom-[-33.33%] left-0 right-0 top-0">
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_1px_0px_rgba(220,214,217,0.25)]" />
      </div>
      <p className="absolute font-bold inset-[31.67%_27.99%_-1.67%_37.91%] leading-[normal] not-italic text-[#3a9b43] text-[28px]">
        Split Safe
      </p>
      <div className="absolute bottom-0 contents left-[28.24%] right-[64.23%] top-[33.33%]">
        <div className="absolute bottom-0 left-[28.24%] overflow-clip right-[64.23%] top-[33.33%]">
          <div className="absolute flex inset-[2.06%_2.98%_4.49%_2.87%] items-center justify-center">
            <div className="flex-none h-[37.381px] scale-y-[-100%] w-[27.831px]">
              <div className="relative size-full">
                <img alt="SplitSafe Logo" className="block max-w-none size-full" src={imgGroup} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Group Item Component
interface GroupItemProps {
  name: string;
  members: number;
  top: number;
}

function GroupItem({ name, members, top }: GroupItemProps) {
  return (
    <div className={`absolute left-[90px] top-[${top}px]`}>
      <p className="text-[22px] text-black tracking-[-0.484px]">
        {name}
      </p>
      <p className="text-[#818181] text-[14px] tracking-[-0.308px] mt-1">
        {members} members
      </p>
    </div>
  );
}

// Navbar Component
function Navbar() {
  return (
    <div className="absolute h-[70px] left-0 top-[782px] w-[393px]">
      <div className="absolute bg-white inset-0">
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_1px_0px_rgba(220,214,217,0.25)]" />
      </div>
      
      {/* Home Icon */}
      <div className="absolute aspect-[24/24] left-[7.63%] overflow-clip right-[82.19%] top-[15px]">
        <div className="absolute inset-[19.83%_18%_16.18%_18%]">
          <div className="absolute inset-[-3.75%]">
            <img alt="Home" className="block max-w-none size-full" src={img} />
          </div>
        </div>
      </div>
      
      {/* User Icon */}
      <div className="absolute aspect-[24/24] left-[82.44%] overflow-clip right-[7.38%] top-[15px]">
        <div className="absolute contents inset-[10%_18.91%_17.28%_15.09%]">
          <div className="absolute inset-[10%_34.27%_55.24%_30.98%]">
            <img alt="User" className="block max-w-none size-full" src={img1} />
          </div>
          <div className="absolute inset-[50.76%_18.91%_17.28%_15.09%]">
            <img alt="User" className="block max-w-none size-full" src={img2} />
          </div>
        </div>
      </div>
      
      {/* Book Icon */}
      <div className="absolute aspect-[24/24] left-[57.51%] overflow-clip right-[32.32%] top-[15px]">
        <div className="absolute inset-[20.83%_31.25%_56.25%_31.25%]">
          <img alt="Book" className="block max-w-none size-full" src={img3} />
        </div>
        <div className="absolute inset-[8.33%_18.75%]">
          <img alt="Book" className="block max-w-none size-full" src={img4} />
        </div>
      </div>
      
      {/* Plus Icon */}
      <div className="absolute aspect-[11/8.00001335144043] left-[32.32%] right-[57.25%] top-[calc(50%+1px)] translate-y-[-50%]">
        <img alt="Add" className="block max-w-none size-full" src={img5} />
      </div>
    </div>
  );
}

export default function HomeScreen() {
  return (
    <div className="bg-white relative size-full min-h-screen">
      {/* Header */}
      <Header className="absolute h-[60px] left-px top-0 w-[393px]" />
      
      {/* Your Groups Title */}
      <p className="absolute font-semibold leading-[normal] left-[30px] not-italic text-[24px] text-black top-[94px]">
        Your Groups
      </p>
      
      {/* Group Items */}
      <div className="absolute left-[30px] top-[147px]">
        <div className="bg-[#d9d9d9] rounded-[5px] size-[48px]" />
        <GroupItem name="Devconnect Trip 🇦🇷" members={4} top={0} />
      </div>
      
      <div className="absolute left-[30px] top-[226px]">
        <div className="bg-[#d9d9d9] rounded-[5px] size-[48px]" />
        <GroupItem name="Devconnect Trip" members={4} top={0} />
      </div>
      
      <div className="absolute left-[30px] top-[305px]">
        <div className="bg-[#d9d9d9] rounded-[5px] size-[48px]" />
        <GroupItem name="Devconnect Trip" members={4} top={0} />
      </div>
      
      {/* Add Group Button */}
      <div className="absolute left-[30px] top-[386px]">
        <div className="bg-[#3a9b43] h-[48px] rounded-[10px] w-[334px] flex items-center justify-center">
          <p className="font-medium text-[22px] text-white tracking-[-0.484px]">
            Add Group
          </p>
        </div>
      </div>
      
      {/* Navbar */}
      <Navbar />
    </div>
  );
}
