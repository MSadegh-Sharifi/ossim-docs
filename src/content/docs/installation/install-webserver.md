---
title: نصب Ubuntu Webserver
description: نصب Ubuntu Webserver
---

یک ماشین مجازی جدید ایجاد کنید. Type را Linux  و Version را Ubuntu (64-bit) انتخاب کنید. فعلا نیازی به انتخاب فایل iso نیست.
1. برای Webserver حداقل 2 گیگابایت رم و 2 هسته پردازنده به ماشین مجازی اختصاص دهید.
2. حداقل 15 گیگابایت فضای ذخیره سازی اختصاص داده و تیک Pre-allocate Full Size را نیز بزنید.
3. Finish را بزنید و صبر کنید تا ماشین مجازی ساخته شود.
4. ماشین مجازی را اجرا کنید.
5. حال فایل `ubuntu-24.04-live-server-amd64.iso` انتخاب کنید و Mount and Retry Boot را بزنید.
6. پس از بوت شدن، گزینه Try or Install Ubuntu Webserver انتخاب کنید.
7. نصب Ubuntu Webserver را با تنظیمات پیش فرض ادامه دهید. تنها نکته‌ای که باید توجه کنید نصب OpenSSH Server بوده که در تصویر زیر نشان داده شده است.
8. صبر کنید تا تمام پکیج ها نصب شوند و سپس سیستم را ریستارت کنید. در بخش بعدی، تنظیمات مورد نیاز را انجام خواهیم داد.

:::tip
توصیه می‌شود جهت کارکرد بهتر، VirtualBox Guest Additions را نیز در Ubuntu Server خود نصب کنید. برای این کار مراحل زیر را دنبال کنید:
1. از منوی Devices گزینه ...Insert Guest Additions CD image را انتخاب کنید.
2. دستورات زیر را در ترمینال وارد کنید:
```sh
sudo apt install gcc make bzip2
sudo mkdir --parents /media/cdrom
sudo mount /dev/cdrom /media/cdrom
sudo /media/cdrom/VBoxLinuxAdditions.run
reboot
```
:::