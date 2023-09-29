from django.template.response import TemplateResponse

def home(request):
    print('request')
    return TemplateResponse(
        request,
        "home.html",
    )
